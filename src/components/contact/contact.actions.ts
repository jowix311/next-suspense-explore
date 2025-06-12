"use server";

import { ContactDetail } from "./contact.types";


// This is just an example code. This is a simple function to show how to use Suspense using "use".
// In a real world scenario, you would fetch the data from an API.
export const getContactDetails = async () : Promise<ContactDetail> => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    return {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '1234567890',
    };
  };
  