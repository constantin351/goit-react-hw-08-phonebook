import css from "./Filter.module.css";
import { useDispatch } from "react-redux";
import { setFilter } from "redux/filterSlice";

const Filter = () => { 
    const dispatch = useDispatch();

    const onFilterInputChange = (event) => {
        dispatch(setFilter(event.currentTarget.value))
    };

    return (
        <>
            <label className={css.filter__label}>
                Find contacts by name
                <input
                    // value={filter}
                    className={css.filter__input}
                    type="text"
                    name="filter"
                    onChange={onFilterInputChange}
                />
            </label>
        </>
    )
};

export default Filter;