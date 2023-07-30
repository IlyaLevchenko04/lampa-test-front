import { object, string } from "yup";

export let formSchema = object({
  name: string().required(),
  surname: string().required(),
  address: string().required(),
  phone: string().required(),
});
