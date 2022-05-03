import ThemeSwitch from "./ThemeSwitcher";
import { useContext, GlobalContext } from "./GlobalContext";

export default function Header() {
    let [state, setState] = useContext(GlobalContext);

    return <div id="header" className={state.theme ? "light" : "dark"}>
        <div>
            <img src={`./list_${state.theme ? "light" : "dark"}.svg`} id="listIcon" />
            <div>
                <h3 className={state.theme ? "light" : "dark"}>

                    Batıkan Kutluer</h3>
            </div>
        </div>
        <div id="ThemeSwitchBox">
            <span>{(state.theme ? "Light" : "Night") + " Mode"}</span>
            <ThemeSwitch />
        </div>
    </div>
}