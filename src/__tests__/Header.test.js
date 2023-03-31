import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import Header from "../components/Header";
import store from "../ReduxStore/store";
import { StaticRouter } from "react-router-dom/server";

test("Logo should load on Rendering Header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const logo = header.getByTestId("logo");

  expect(logo.src).toBe(
    "https://lh5.googleusercontent.com/p/AF1QipOhHeCaQ6Xb6RVf3R_ZBTbDK4FIug_203rKsHLT"
  );
});

test("Cart item should be zero on Rendering Header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const cart = header.getByTestId("cart");

  expect(cart.innerHTML).toBe("Cart - 0");
});
