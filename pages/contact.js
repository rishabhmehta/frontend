// import Shared from "@/components/Shared"

// import Table from '@/components/Table'

/**
 *
 * @returns We can never now when to make a compoent and when to not early on while learning
 * @returns Always go for writing the jsx (html basically) where it is required
 * @returns Now once done writing the jsx, there are two ways (more or less) to decide whether you need to refactor and   make it a component
 * @returns (1) If the JSX (html basically) is too large then you can make it a component to make the page look less bulky and cluttered
 * @returns (2) If you go to another route and see that same JSX (html basically) is being written then go to the first instance where you wrote it first refactor it into a component and import in both the places and use it
 */

export default function () {
  return (
    <>
      {/* <main className={styles.main}> */}
      <h1>Contact Page</h1>
      {/* the (1) first step in the comments above */}
      {/* Table component has to be inserted here */}
      {/* <Table /> */}

      {/* the (2) second step in the comments above  */}
      {/* Cut compoentn has to be inserted below */}
      {/* <Shared /> */}
    </>
  )
}
