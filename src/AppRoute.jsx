import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';

const AppRoute = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      {/* <Route element={<Layout />}>
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/users" element={<Users />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path={'/product/:productId'} element={<Product />} />
        <Route path="/category" element={<Category />}>
          <Route path="/category/all" element={<AllCategory />} />
          <Route path="/category/create" element={<CreateCategory />} />
          <Route
            path="/category/edit/:categoryId"
            element={<EditCategoryById />}
          />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Route> */}
    </Routes>
  );
};

export default AppRoute;
