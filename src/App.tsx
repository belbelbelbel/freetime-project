import './App.css'
// import { RandomPassword } from './Component/RandomPassword'
// import { SlideTabsExample } from './Component/SlideTabs'
// import { Todo } from './Component/Todo'
import { DarkMode } from './DarkMode';
function App() {

  
  const FindTheThirdHighest = (a:number[]) => {
    if (a.length < 3) {
      alert('The array must contain at least three numbers')
      return null
    }
    
    let first = -Infinity
    let second = -Infinity
    let third = -Infinity
    
    for (let i = 0; i < a.length; i++) {
      if (a[i] > first) {
        third = second
        second = first
        first = a[i]
      } else if (a[i] > second && a[i] < first) {
        third = second
        second = a[i]
      } else if (a[i] > third && a[i] < second) {
        third = a[i]
      }
      
    }
    return third
  
  }
  const thurdHighest = FindTheThirdHighest([10,15,20,3,40])
  console.log(thurdHighest)
  return (
    <>
      <div>
        {/* <Todo /> */}
        {/* <RandomPassword/> */}
        {/* <SlideTabsExample/> */}
        <DarkMode/>
      </div>
    </>
  )
}

export default App
