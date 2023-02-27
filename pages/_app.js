import Test from '@/components/Test';
import '@/styles/globals.css'
import { Unity, useUnityContext } from "react-unity-webgl";

export default function App({ Component, pageProps }) {
    const { unityProvider } = useUnityContext({
    loaderUrl: "/Build/Build.loader.js",
    dataUrl: "/Build/Build.data",
    frameworkUrl: "/Build/Build.framework.js",
    codeUrl: "/Build/Build.wasm",
  });

  return ( 
    <>
      <Test />
      <Unity unityProvider={unityProvider} />
    </>
  )
}
