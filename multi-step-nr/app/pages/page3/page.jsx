"use client";
import { Checkbox } from "@nextui-org/react";
import {
  setAddon,
  selectAddonSelected,
  selectPlanFrequency,
} from "@/app/features/plans/planSlice";
import { useDispatch, useSelector } from "react-redux";

const Page3 = () => {
  const isMonthly = useSelector(selectPlanFrequency);
  const dispatch = useDispatch();
  const viewAddon = useSelector(selectAddonSelected);
  const addon = [...viewAddon];

  return (
    <div className="w-[343px] h-[383px] bg-white pt-10 px-5  flex flex-col space-y-5 rounded-[10px]">
      <div className="w-[297px] h-[87px] flex flex-col ">
        <h1
          className=" text-[24px] font-bold text-denim"
          onClick={() => {
            dispatch(setAddon("OnlineService"));
          }}
        >
          Pick your addons
        </h1>
        <p className="text-[gray] text-[16px]">
          Add-ons help enhance your gaming experience.
        </p>
      </div>

      <div className="planContainer flex flex-col space-y-5">
        {/** PLAN1 */}
        <div
          className={`w-[295px] h-[62px] border-[1px] border-gray-500 rounded-[8px] flex flex-row justify-between ${
            addon.some((addon) => addon.addon === "OnlineService")
              ? "border-purple-500"
              : ""
          }`}
        >
          <div className="w-[200px] h-[45px] flex flex-row ml-2 mt-2  ">
            <Checkbox
              radius="none"
              onChange={() => {
                // Copia los addons seleccionados actualmente
                const newAddons = [...viewAddon];

                // Encuentra el índice del addon a través de su propiedad, considerando que newAddons es un array de objetos
                const index = newAddons.findIndex(
                  (addon) => addon.addon === "OnlineService"
                );

                if (index === -1) {
                  // Agrega el nuevo addon si no está ya en el array
                  newAddons.push({
                    addon: "OnlineService",
                    price: isMonthly ? 10 : 1,
                  });
                } else {
                  // Si ya está en el array, lo remueve (esto maneja el caso de deselección)
                  newAddons.splice(index, 1);
                }

                // Despacha la acción para actualizar el estado con el nuevo array de addons
                dispatch(setAddon(newAddons));
              }}
              className="bottom-[5px]"
              isSelected={viewAddon.some(
                (addon) => addon.addon === "OnlineService"
              )}
            ></Checkbox>

            <div className="flex flex-col ml-2 ">
              <h3 className="text-denim font-semibold text-[14px]">
                Online service
              </h3>
              <p className="text-[gray]  text-[12px]">
                Access to multiplayer games
              </p>
            </div>
          </div>
          <div className="  text-[12px] mt-4 mr-2 text-cpurple ">
            {isMonthly === false ? "+$1/mo" : "+10/yr"}
          </div>
        </div>

        {/** PLAN2 */}
        <div
          className={`w-[295px] h-[62px] border-[1px] border-gray-500 rounded-[8px] flex flex-row justify-between ${
            addon.some((addon) => addon.addon === "largeStore")
              ? "border-purple-500"
              : ""
          }`}
        >
          <div className="w-[200px] h-[45px] flex flex-row ml-2 mt-2">
            <Checkbox
              radius="none"
              onChange={() => {
                // Copia los addons seleccionados actualmente
                const newAddons = [...viewAddon];

                // Encuentra el índice del addon por su propiedad, asumiendo que cada addon es un objeto
                const index = newAddons.findIndex(
                  (addon) => addon.addon === "largeStore"
                );

                if (index === -1) {
                  // Agrega el nuevo addon como objeto si no está ya en el array
                  newAddons.push({
                    addon: "largeStore",
                    price: isMonthly ? 20 : 2,
                  }); // Asumiendo que quieres agregar un precio, ajusta según sea necesario
                } else {
                  // Si ya está en el array, lo remueve (esto maneja el caso de deselección)
                  newAddons.splice(index, 1);
                }

                // Despacha la acción para actualizar el estado con el nuevo array de addons
                dispatch(setAddon(newAddons));
              }}
              className="bottom-[5px]"
              isSelected={viewAddon.some(
                (addon) => addon.addon === "largeStore"
              )}
            ></Checkbox>

            <div className="flex flex-col ml-2 ">
              <h3 className="text-denim font-semibold text-[14px]">
                Larger storage
              </h3>
              <p className="text-[gray]  text-[12px]">
                Extra 1TB of cloud save
              </p>
            </div>
          </div>
          <div className="  text-[12px] mt-4 mr-2 text-cpurple ">
            {isMonthly === false ? "+$2/mo" : "+20/yr"}
          </div>
        </div>
        {/** PLAN3 */}
        <div
          className={`w-[295px] h-[62px] border-[1px] border-gray-500 rounded-[8px] flex flex-row justify-between ${
            addon.some((addon) => addon.addon === "customProfile")
              ? "border-purple-500"
              : ""
          }`}
        >
          <div className="w-[210px] h-[45px] flex flex-row ml-2 mt-2">
            <Checkbox
              radius="none"
              onChange={() => {
                // Copia los addons seleccionados actualmente
                const newAddons = [...viewAddon];

                // Encuentra el índice del addon por su propiedad, considerando que cada addon es un objeto
                const index = newAddons.findIndex(
                  (addon) => addon.addon === "customProfile"
                );

                if (index === -1) {
                  // Agrega el nuevo addon como objeto si no está ya en el array
                  newAddons.push({
                    addon: "customProfile",
                    price: isMonthly ? 20 : 2,
                  }); // Asume un precio, ajusta según sea necesario
                } else {
                  // Si ya está en el array, lo remueve (esto maneja el caso de deselección)
                  newAddons.splice(index, 1);
                }

                // Despacha la acción para actualizar el estado con el nuevo array de addons
                dispatch(setAddon(newAddons));
              }}
              className="bottom-[5px]"
              isSelected={viewAddon.some(
                (addon) => addon.addon === "customProfile"
              )}
            ></Checkbox>

            <div className="flex flex-col ml-2 w-[]">
              <h3 className="text-denim font-semibold text-[14px]">
                Customizable profile
              </h3>
              <p className="text-[gray]   text-[12px]">
                Custom theme on your profile
              </p>
            </div>
          </div>
          <div className="text-[12px]  mt-4 mr-2  text-cpurple  ">
            {isMonthly === false ? "+$2/mo" : "+20/yr"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3;
