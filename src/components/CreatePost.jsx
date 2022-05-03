import { GlobalContext, useContext } from "./GlobalContext";

function CreatePost() {
    let [state, setState] = useContext(GlobalContext);

    function autosize(e) {
        var el = e.target;

        setTimeout(function () {
            el.style.padding = 0;
            // for box-sizing other than "content-box" use:
            el.style.cssText = '-moz-box-sizing:content-box';
            if (el.value.split("\n").length === 1 && el.value.length < 250) {
                el.style.height = el.style.minHeight;
            } else {
                el.style.height = el.scrollHeight + 'px';
            }
        }, 0);
    }

    return <div>
        <div id="CreatePost" className={state.theme ? "light" : "dark"}>
            <h2>Düşüncelerini Paylaş!</h2>
            <div>
                <textarea placeholder="Bence Akp did nothing wr..." onKeyDown={(e) => autosize(e)}></textarea>
            </div>
        </div>
    </div>
}

export default CreatePost;