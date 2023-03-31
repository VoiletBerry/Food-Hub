import Header from "../components/Header";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { StaticRouter } from "react-router-dom/server";
import store from "../ReduxStore/store";
import { Provider } from "react-redux";
import { resturantMenuData } from "../mocks/dummyResturantData";
import ResturantDetails from "../components/ResturantDetails";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(resturantMenuData),
  });
});

test("Add items to Cart", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
        <ResturantDetails />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => body.getByTestId("res_menu_page"));

  const addItemBtn = body.getAllByTestId("addItemBtn");

  fireEvent.click(addItemBtn[0]);
  fireEvent.click(addItemBtn[1]);

  const cart = body.getByTestId("cart");

  expect(cart.innerHTML).toBe("Cart - 2");
});
