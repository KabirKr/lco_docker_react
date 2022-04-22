import { render, screen } from "@testing-library/react"
import App from "./App"

test("renders My amazing startup", () => {
  render(<App />)
  const linkElement = screen.getByText(/My amazing startup/i)
  expect(linkElement).toBeInTheDocument()
})
