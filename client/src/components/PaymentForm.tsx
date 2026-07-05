import { PaymentFormInputs, paymentFormSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, ShoppingCartIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const PaymentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentFormInputs>({
    resolver: zodResolver(paymentFormSchema),
  });

  const router = useRouter();

  const handlePaymentForm: SubmitHandler<PaymentFormInputs> = (data) => {};
  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(handlePaymentForm)}
    >
      <div className="flex flex-col gap-1">
        <label
          htmlFor="cardHolder"
          className="text-xs text-gray-500 font-medium"
        >
          Name on card
        </label>
        <input
          type="text"
          id="cardHolder"
          placeholder="Enter the name on the card..."
          className="border-b border-gray-200 py-2 outline-none text-sm"
          {...register("cardHolder")}
        />
        {errors.cardHolder && (
          <p className="text-xs text-red-500">{errors.cardHolder.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="cardNumber"
          className="text-xs text-gray-500 font-medium"
        >
          Card Number
        </label>
        <input
          type="text"
          id="cardNumber"
          placeholder="Enter your card number..."
          className="border-b border-gray-200 py-2 outline-none text-sm"
          {...register("cardNumber")}
        />
        {errors.cardNumber && (
          <p className="text-xs text-red-500">{errors.cardNumber.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="expirationDate"
          className="text-xs text-gray-500 font-medium"
        >
          Expiration date
        </label>
        <input
          type="text"
          id="expirationDate"
          placeholder="Enter the card expiration date..."
          className="border-b border-gray-200 py-2 outline-none text-sm"
          {...register("expirationDate")}
        />
        {errors.expirationDate && (
          <p className="text-xs text-red-500">
            {errors.expirationDate.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="CVV" className="text-xs text-gray-500 font-medium">
          CVV
        </label>
        <input
          type="text"
          id="CVV"
          placeholder="Enter your city here..."
          className="border-b border-gray-200 py-2 outline-none text-sm"
          {...register("CVV")}
        />
        {errors.CVV && (
          <p className="text-xs text-red-500">{errors.CVV.message}</p>
        )}
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Image
          src="/klarna.png"
          alt="klarna"
          width={50}
          height={25}
          className="rounded-md"
        />
        <Image
          src="/cards.png"
          alt="cards"
          width={50}
          height={25}
          className="rounded-md"
        />
        <Image
          src="/stripe.png"
          alt="stripe"
          width={50}
          height={25}
          className="rounded-md"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-gray-800 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2 hover:bg-gray-900 transition-all duration-300"
      >
        Checkout
        <ShoppingCartIcon className="w-3 h-3" />
      </button>
    </form>
  );
};

export default PaymentForm;
