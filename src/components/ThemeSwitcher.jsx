import { useContext, GlobalContext } from "./GlobalContext";

export default function ThemeSwitch() {
    let [state, setState] = useContext(GlobalContext);

    function changeTheme() {
        console.log(state)
        setState(prev => ({ ...prev, theme: !prev.theme }));
    }

    return <div className="ThemeSwitcher">
        <label className="switch">
            <input type="checkbox" onClick={() => changeTheme()} />
            <span className="slider round"></span>
        </label>
    </div>
}
