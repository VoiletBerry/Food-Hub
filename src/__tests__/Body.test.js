import { fireEvent, render, waitFor } from "@testing-library/react";
import { StaticRouter } from "react-router-dom/server";
import Body from "../components/Body";
import { resturantData } from "../mocks/dummyResturantData";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(resturantData),
  });
});

test("Shimmer should Load on Homepage", () => {
  const body = render(<Body />);

  const shimmer = body.getByTestId("shimmer");

  expect(shimmer.children.length).toBe(15);
});

test("Resturant should Load on Homepage", async () => {
  const body = render(
    <StaticRouter>
      <Body />
    </StaticRouter>
  );

  await waitFor(() => body.getByTestId("res-list"));

  const res_list = body.getByTestId("res-list");

  expect(res_list.children.length).toBe(15);
});

test("Search Functionality Load on Homepage", async () => {
  const body = render(
    <StaticRouter>
      <Body />
    </StaticRouter>
  );

  await waitFor(() => body.getByTestId("res-list"));
  await waitFor(() => body.getByTestId("search_btn"));

  const input = body.getByTestId("serch_input");

  fireEvent.change(input, {
    target: {
      value: "king",
    },
  });

  const searchBtn = body.getByTestId("search_btn");

  fireEvent.click(searchBtn);

  const res_list = body.getByTestId("res-list");

  expect(res_list.children.length).toBe(2);
});
