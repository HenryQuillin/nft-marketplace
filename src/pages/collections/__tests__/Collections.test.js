import React from "react"
import { render, cleanup, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import testCollectionsResponse from "../../../testData/Collections.json"
import axiosMock from "axios"
import Collections from "../Collections"

afterEach(cleanup)

describe("Collections page", () => {
  it("shows loading icon when no data has been recieved", async () => {
    axiosMock.get.mockResolvedValueOnce()

    const { getByTestId } = render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Collections />} />
        </Routes>
      </BrowserRouter>
    )
    expect(getByTestId("circularProgress")).toBeVisible()
  })
  it("shows collections when data has been recieved", async () => {
    axiosMock.get.mockResolvedValueOnce(testCollectionsResponse)

    const { findAllByTestId } = render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Collections />} />
        </Routes>
      </BrowserRouter>
    )
    const CollectionCard = await waitFor(() => findAllByTestId("collection-card"))

    expect(CollectionCard).toBeDefined()
    expect(axiosMock.get).toHaveBeenCalledTimes(1)
  })
})
