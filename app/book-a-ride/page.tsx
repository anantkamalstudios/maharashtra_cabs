import Layout from "@/components/layout/Layout";
import Search1 from "@/components/sections/Search1";
import Link from "next/link";
export default function BookARide() {
  return (
    <>
      <Layout footerStyle={1}>
        <div className="page-header-2 pt-130 book-a-ride">
          <Search1 />
        </div>
      </Layout>
    </>
  );
}
