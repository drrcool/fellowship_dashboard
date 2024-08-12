import { Header } from "@/components/Header/Header";
import { RegionSelector } from "@/components/RegionSelector/RegionSelector";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="m-5">
        <RegionSelector />
      </div>
    </div>
  );
}
