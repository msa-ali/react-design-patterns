
import './App.css';
import { SplitScreen } from './components/SplitScreen';
import { RegularList } from './components/RegularList';
import { people, products } from './data';
import { SmallPersonListItem } from './components/people/SmallPersonListItem';
import { LargePersonListItem } from './components/people/LargePersonListItem';
import { SmallProductListItem } from './components/products/SmallProductListItem';
import { LargeProductListItem } from './components/products/LargeProductListItem';
import { NumberedList } from './components/NumberedList';
import { Modal } from './components/Modal';

const LeftHandComponent = () => {
  return <h1 style={{ backgroundColor: 'green' }}>Left!</h1>
}

const RightHandComponent = () => {
  return <p style={{ backgroundColor: 'red' }}>Right!</p>
}

function App() {
  // Layout Components
  /*return (
    <SplitScreen
      leftWeight={1}
      rightWeight={3}
    >
      <LeftHandComponent />
      <RightHandComponent />
    </SplitScreen>
  );*/

  // return (
  //   <>
  //     <RegularList
  //       items={people}
  //       resourceName='person'
  //       itemComponent={SmallPersonListItem}
  //     />
  //     <RegularList
  //       items={people}
  //       resourceName='person'
  //       itemComponent={LargePersonListItem}
  //     />
  //     <NumberedList
  //       items={products}
  //       resourceName='product'
  //       itemComponent={SmallProductListItem}
  //     />
  //     <RegularList
  //       items={products}
  //       resourceName='product'
  //       itemComponent={LargeProductListItem}
  //     />
  //   </>
  // );

  return (
    <>
      <Modal>
          <LargeProductListItem product={products[0]} />
      </Modal>
    </>
  );
}

export default App;
