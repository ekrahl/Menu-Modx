import { FeatureForm, ContainerHeader, AddItemBtn } from '../../'

const AddFeatureItem = () => {

    return (

        <div className="flex flex-col text-gray-200 mt-2">
            <ContainerHeader title="Add Item to Catalog" />
            <div
                className="text-gray-200 border-b border-gray-600 rounded-b-xl px-2 py-2"
                style={{ backgroundImage: `linear-gradient(to top, #191919, #2f2f2f` }}>
                <FeatureForm />
                <div className="flex justify-center">
                    <AddItemBtn />
                </div>
            </div>
        </div>
    )
}

export default AddFeatureItem