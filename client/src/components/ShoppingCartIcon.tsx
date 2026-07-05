"use client";
import useCartStore from "@/stores/cartStore";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";

const ShoppingCartIcon = () => {
  const { cart } = useCartStore();
  return (
    <Link href="/cart" className="relative">
      <ShoppingCart className="w-4 h-4 text-gray-600" />
      <span className="absolute -top-3 -right-3 bg-blue-400 text-white w-4 h-4 rounded-full flex items-center justify-center text-xs font-medium">
        {cart.length}
      </span>
    </Link>
  );
};

export default ShoppingCartIcon;
