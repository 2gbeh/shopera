import { FakerHelper } from "../main.js";

const User = {
  name: "other_names",
  email: "email",
  password: "password",
  //
  created_at: "date",
  updated_at: null,
  deleted_at: null,
  id: "id",
};

const Notification = {
  id: 1,
  title: "product",
  summary: "description",
  status: () => FakerHelper.in(Object.keys(["Unread", "Read"])),
  created_at: "date",
};

const Event = {
  id: 1,
  thumbnail: "thumbnail",
  title: "product",
  summary: "sentence",
  date: "dateShort",
  time: "timeShort",
  venue: "address",
  user: {
    id: "uuid",
    avatar: "avatar",
    surname: "surname",
    other_names: "otherNames",
  },
  attendance: {
    total: "reviews",
    male: 0,
    female: 0,
  },
  created_at: "date",
};

const Attendance = {
  id: 1,
  avatar: "avatar",
  name: "otherNames",
  sex: "sex",
  email: "email",
  status: "booleanInt",
  created_at: "date",
};

const CarBrand = {
  id: 1,
  brand: () =>
    FakerHelper.in([
      "lexus",
      "mercedes",
      "hyundai",
      "toyota",
      "range rover",
      "volkswagen",
      "kia",
      "honda",
    ]),
  created_at: "date",
};

const Model = {
  id: 1,
  created_at: "date",
};

const Product = {
  id: "id",
  brand_id: () => FakerHelper.number(1, 10),
  thumbnail: "thumbnail",
  name: "product",
  price: "price",
  summary: "description",
  description: "paragraphs",
  barcode: () => FakerHelper.numbers(12, true),
  color: "hexcode",
  weight: 0,
  discount: "discount",
  units: () => FakerHelper.number(0, 99),
  created_at: "date",
  updated_at: null,
  deleted_at: null,
  uuid: "uuid",
};

const Brand = {
  id: "id",
  logo: "logo",
  name: "company",
  website: "url",
  created_at: "date",
  updated_at: null,
  deleted_at: null,
  uuid: "uuid",
};

export default Product;
export const customSchemaSize = 25;
