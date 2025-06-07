import { Button, Card, CardContent } from "@/src/shared/ui";
import { ShoppingBasket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ProductCardProps } from "../model/types/ProductCard.props";

export const ProductCard = (props: ProductCardProps) => {
    const { id, image, price, title } = props;
    return (
        <Card className="w-full sm:w-[200px]">
            <CardContent className="flex items-center justify-between sm:flex-col">
                <Link className="sm:block sm:w-full" href={`/product/${id}`}>
                    <Image
                        className="rounded-xl sm:w-full sm:rounded-none"
                        src={image}
                        alt={title}
                        width={112}
                        height={112}
                    />
                </Link>
                <div className="w-1/2 sm:mt-3 sm:w-full">
                    <Link href={`/product/${id}`}>
                        <h3 className="line-clamp-1 text-sm transition-colors duration-150 ease-in-out hover:text-blue-600">
                            {title}
                        </h3>
                    </Link>

                    <div className="flex items-center justify-between sm:mt-2 sm:items-center">
                        <span className="font-semibold text-neutral-600">
                            {price} {""} $
                        </span>
                        <Button size={"icon"}>
                            <ShoppingBasket />
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};
