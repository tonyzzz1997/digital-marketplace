import Link from "next/link";
import {NavbarLinks} from "@/app/components/NavbarLinks";

export function Navbar() {
    return (
        <nav className="relative max-w-7xl w-full flex md:grid md:grid-cols-12 items-center px-4 md:px-8 mx-auto py-7">
            <div className="md:col-span-3">
                <Link href="/">
                    <h1 className="text-2xl font-semibold ">
                        Marshal <span className="text-violet-500">UI</span>
                    </h1>
                </Link>
            </div>
            <NavbarLinks />

            <div className="flex items-center gap-x-2 ms-auto md:col-span-3">

            </div>

        </nav>
    )
}