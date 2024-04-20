"use client";

import useProducts from "@/hooks/useProducts";

export const TryTable = () => {
  const { products } = useProducts();
  //
  return (
    <table>
      <caption>Showing {products?.length || 0} records</caption>
      <thead>
        <tr>
          <th>#</th>
          <th>Brand</th>
          <th>Product</th>
          <th>Barcode</th>
          <th>Date</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {products?.map((e, i) => (
          <tr key={i}>
            <td title={`${e.id}|${e.uuid}`}>{i + 1}</td>
            <td>{e?.brand?.name}</td>
            <td>{e?.name}</td>
            <td>{e?.barcode}</td>
            <td>{new Date(e?.created_at).toJSON()}</td>
            <td></td>
          </tr>
        )) || (
          <tr>
            <td colSpan={9}>No records found</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};
