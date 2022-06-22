import { CssBaseline, ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout/Layout.component'
import Theme from '../theme/Theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
	<ThemeProvider theme={Theme}>
		<Layout>
			<CssBaseline />
			<Component  {...pageProps} />
		</Layout>
	</ThemeProvider>
  )
}

export default MyApp
