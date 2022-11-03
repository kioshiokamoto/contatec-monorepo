import { useRouter } from "next/router"
import Head from "next/head"
import Link from "next/link"
import { Text, Breadcrumb, BreadcrumbItem } from "@chakra-ui/react"
import Layout from "../../../components/Layout"
import CategoryItems from "../../../sections/Explore/CategoryId/CategoryItems"
import ZIcon from "../../../components/Icon"

const Category = () => {
  const router = useRouter()

  const { categoryid } = router.query

  return (
    <div>
      <Head>
        <title>Create Next App</title>

        <meta name="description" content="Generated by create next app" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout withNav withFooter>
        <div className="generalWrapper">
          <Text
            fontSize="5xl"
            className="bold600"
            align="center"
            color="primary"
            py="5"
          >
            Elige una catogoría
          </Text>
          <Breadcrumb separator={<ZIcon name="arrow-right" />}>
            <BreadcrumbItem>
              <ZIcon
                name="arrow-leftv2"
                className="mr1"
                size={11}
                pointer
                onClick={() => {
                  router.push("/explorar")
                }}
              />
              <Link href="/explorar" as={`/explorar`}>
                <a>Categoría</a>
              </Link>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <Link
                href="/explorar/[categoryid]"
                as={`/explorar/${categoryid}`}
              >
                <a>{categoryid}</a>
              </Link>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
        <CategoryItems category={categoryid} />
      </Layout>
    </div>
  )
}

export default Category
