import Image from "next/image";
import styles from "./page.module.scss";
import Nav from "@/app/compound/Nav";
import Experience from "./compound/Experience";
export default function Home() {
    return (
        <main>
            <Nav />
            <Experience />
        </main>
    );
}
