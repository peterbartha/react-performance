// Code splitting
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'
// 💣 remove this import
// import Globe from '../globe'

/*******************************************************************************
 * Exercise
 ******************************************************************************/

// 🐨 use React.lazy to create a Globe component which uses a dynamic import
// to get the Globe component from the '../globe' module.
// const Globe = React.lazy(() => import('../globe'))

// function App() {
//   const [showGlobe, setShowGlobe] = React.useState(false)

//   // 🐨 wrap the code below in a <React.Suspense /> component
//   // with a fallback.
//   // 💰 try putting it in a few different places and observe how that
//   // impacts the user experience.
//   return (
//     <div
//       style={{
//         display: 'flex',
//         alignItems: 'center',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         height: '100%',
//         padding: '2rem',
//       }}
//     >
//       <label style={{marginBottom: '1rem'}}>
//         <input
//           type="checkbox"
//           checked={showGlobe}
//           onChange={e => setShowGlobe(e.target.checked)}
//         />
//         {' show globe'}
//       </label>
//       <div style={{width: 400, height: 400}}>
//         {showGlobe ? (
//           <React.Suspense fallback={<div>loading...</div>}>
//             <Globe />
//           </React.Suspense>
//         ) : null}
//       </div>
//     </div>
//   )
// }
// 🦉 Note that if you're not on the isolated page, then you'll notice that this
// app actually already has a React.Suspense component higher up in the tree
// where this component is rendered, so you *could* just rely on that one.

/*******************************************************************************
 * Extra 1. 💯 eager loading
 ******************************************************************************/
// function App() {
//   const [showGlobe, setShowGlobe] = React.useState(false)

//   function loadGlobe() {
//     return import('../globe')
//   }
//   const Globe = React.lazy(loadGlobe)

//   return (
//     <div
//       style={{
//         display: 'flex',
//         alignItems: 'center',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         height: '100%',
//         padding: '2rem',
//       }}
//     >
//       <label
//         style={{marginBottom: '1rem'}}
//         onMouseOver={loadGlobe}
//         onFocus={loadGlobe}
//       >
//         <input
//           type="checkbox"
//           checked={showGlobe}
//           onChange={e => setShowGlobe(e.target.checked)}
//         />
//         {' show globe'}
//       </label>
//       <div style={{width: 400, height: 400}}>
//         {showGlobe ? (
//           <React.Suspense fallback={<div>loading...</div>}>
//             <Globe />
//           </React.Suspense>
//         ) : null}
//       </div>
//     </div>
//   )
// }

/*******************************************************************************
 * Extra 2. 💯 webpack magic comments
 ******************************************************************************/
function App() {
  const [showGlobe, setShowGlobe] = React.useState(false)

  const Globe = React.lazy(() => import(/* webpackPrefetch: true */ '../globe'))

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        padding: '2rem',
      }}
    >
      <label style={{marginBottom: '1rem'}}>
        <input
          type="checkbox"
          checked={showGlobe}
          onChange={e => setShowGlobe(e.target.checked)}
        />
        {' show globe'}
      </label>
      <div style={{width: 400, height: 400}}>
        {showGlobe ? (
          <React.Suspense fallback={<div>loading...</div>}>
            <Globe />
          </React.Suspense>
        ) : null}
      </div>
    </div>
  )
}

export default App
