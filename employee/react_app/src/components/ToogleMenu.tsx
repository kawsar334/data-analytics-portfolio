
// interface ToggleMenuProps {
//   toggleSidebar: () => void;
//   isOpen: boolean;
// }

// const ToogleMenu = ({ toggleSidebar, isOpen }: ToggleMenuProps) => {
//   return (
//     <div
//       onClick={toggleSidebar}
//       className={`fixed ${
//         isOpen ? 'left-[200px]' : 'left-[0px]'
//       } top-20 z-40 border border-gray-300 bg-white shadow-lg p-1 text-center flex justify-center items-center w-8 h-8 rounded-full font-bold text-gray-600 cursor-pointer transition-all duration-300`}
//     >
//       {isOpen ? '<' : '>'}
//     </div>
//   );
// };

// export default ToogleMenu;
interface ToggleMenuProps {
  toggleSidebar: () => void;
  isOpen: boolean;
}

const ToogleMenu = ({ toggleSidebar, isOpen }: ToggleMenuProps) => {
  return (
    <div
      onClick={toggleSidebar}
      className={`fixed ${
        isOpen ? 'left-[200px]' : 'left-[0px]'
      } top-20 z-40 border border-gray-300 bg-white shadow-lg p-1 text-center flex justify-center items-center w-8 h-8 rounded-full font-bold text-gray-600 cursor-pointer transition-all duration-300`}
    >
      {isOpen ? '<' : '>'}
    </div>
  );
};

export default ToogleMenu;