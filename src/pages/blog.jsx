import React from "react"

import { Layout } from "../components/Layout"
import { BlogRoll } from "../components/BlogRoll"


const BlogPage = () => (
	<Layout title="Blog" withSidebar>
		<BlogRoll />
	</Layout>
)

export default BlogPage
