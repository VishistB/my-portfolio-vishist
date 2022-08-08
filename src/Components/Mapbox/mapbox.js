import "./Mapboxpage.css";

export default function Mapbox() {
    return (
        <div className="mapboxwrapper">
            <h1 id="Mapboxheading">Mapbox API</h1>
            <iframe
                height={700}
                style={{ width: "100%" }}
                scrolling="no"
                title="Locating map"
                src="https://codepen.io/VishistB/embed/ExEypaB?default-tab=result"
                frameBorder="no"
                loading="lazy"
                allowTransparency="true"
                allowFullScreen="true"
            >
                See the Pen &lt;a
                href="https://codepen.io/VishistB/pen/ExEypaB"&gt; Locating
                map&lt;/a&gt; by Vishist Bhagabati (&lt;a
                href="https://codepen.io/VishistB"&gt;@VishistB&lt;/a&gt;) on
                &lt;a href="https://codepen.io"&gt;CodePen&lt;/a&gt;.
            </iframe>
        </div>
    );
}
