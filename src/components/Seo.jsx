// SEO component that injects site metadata into <head>

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

import { settings } from '../../data'


const _queryMeta = graphql`
	query {
		site {
			siteMetadata {
				title
				description
				author
			}
		}
	}
`


export function Seo({ description, lang, meta, title, author }) {
	const { site } = useStaticQuery(_queryMeta)
	const metaDescription = description || site.siteMetadata.description
	const pageAuthor = author || site.siteMetadata.author

	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			title={title}
			titleTemplate={`%s | ${site.siteMetadata.title}`}
			meta={[
				{
					name: `description`,
					content: metaDescription,
				},
				{
					property: `og:title`,
					content: title,
				},
				{
					property: `og:description`,
					content: metaDescription,
				},
				{
					property: `og:type`,
					content: `website`,
				},
				{
					name: `twitter:card`,
					content: `summary`,
				},
				{
					name: `twitter:creator`,
					content: pageAuthor,
				},
				{
					name: `twitter:title`,
					content: title,
				},
				{
					name: `twitter:description`,
					content: metaDescription,
				},
			].concat(meta)}
		/>
	)
}


Seo.defaultProps = {
	lang: `en`,
	meta: [],
	description: ``,
}


Seo.propTypes = {
	description: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.arrayOf(PropTypes.object),
	title: PropTypes.string.isRequired,
}
