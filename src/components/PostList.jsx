import { GlobalContext, useContext } from "./GlobalContext";

export default function PostList() {
    let posts = [{
        head: "Abi çok saçma ama...",
        context: `BTC'ye geçenlerde kendi riskimi alarak ufak miktarla cross 20x long açtım, piyasada bu kadar korku ve düşeceğiz telaşı varsa dönebilir deyip.

            Şu an %20 kardayım. (1x'e göre %1) İyi kâra geçersem kâr alır ana parayı çekerim oradan sonra isterse likit olsun. Ya da sağlık olsun. :)`
    },
    {
        head: "Neden ki?...",
        context: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    },
    {
        head: "batıkan yazılım yapıyor"
        , context: "sdıhjfoıdshjoıghjdsıofjhpoısdjg"
    }
    ];

    return <div id="postList">
        {
            posts.map(({ head, context }, i) => <Post key={i} head={head}>{context}</Post>)
        }
    </div>
}

function Post({ head, children }) {
    let [state, setState] = useContext(GlobalContext);

    return <div className="post">
        <h2>{head}</h2>
        <p className="line-clamp">{children}</p>
        <span className="readmore"><b>Tweetin tamamını oku.</b></span>
        <hr className={state.theme ? "light" : "dark"} />
    </div>;
}

export { Post };