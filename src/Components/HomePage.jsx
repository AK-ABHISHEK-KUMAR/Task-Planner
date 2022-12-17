import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addPreference } from "../Redux/Features/TodoSlice";

const ButtonStyle = {
  width: "200px",
  height: "200px",
  borderRadius: "70% 30% 30% 70% / 30% 30% 70% 70%",
  backgroundColor: "#A9C9FF",
  backgroundImage: "linear-gradient(120deg, #A9C9FF 0%, #FFBBEC 100%)",
  boxShadow: "0px 20px 81px rgba(0, 0, 0, 0.3)",
  color: "blueviolet",
  fontWeight: "bolder",
  fontSize: 25,
};

export default function Homepage() {
  const dispatch = useDispatch();
  const [show, setShow] = useState({
    box: true,
    message: "",
    type: "success",
    email: "",
  });

  return (
    <>
      <Card
        style={{
          display: "grid",
          width: "100vw",
          height: "100vh",
          borderRadius: 0,
          placeItems: "center",
          backgroundColor: "#8EC5FC",
          backgroundImage: "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)",
        }}
      >
        <Card.Body>
          <Card
            style={{
              borderRadius: "10px",
              borderColor: "white",
              background: "linear-gradient(145deg, #f0f0f0, #cacaca)",
              boxShadow: "0px 0px 101px 80px rgba(38,103,110,0.9)",
              backgroundColor: "#8BC6EC",
              backgroundImage:
                "linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)",
              fontFamily: "sans-serif",
            }}
            className="text-center"
          >
            <Card.Header>
              <Card.Title
                as={"h2"}
                style={{
                  color: "blueviolet",
                  fontWeight: "bolder",
                }}
              >
                Welcome To Task Planner 🎯
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Title
                style={{
                  color: "papayawhip",
                  fontWeight: "bolder",
                }}
              >
                Enter Your E-mail
              </Card.Title>
              {/* <p>We use it as your identity for saving tasklists.</p> */}
              <Form.Control
                style={{
                  color: "mediumvioletred",
                  fontWeight: "bolder",
                }}
                as={"input"}
                value={show.email}
                onChange={(e) => setShow({ ...show, email: e.target.value })}
                isInvalid={show.type === "danger" ? true : false}
              />
              <Form.Control.Feedback
                style={{ textAlign: "start" }}
                type="invalid"
              >
                {show.message + " ! 🤔"}
              </Form.Control.Feedback>
              <hr />
              <div className="d-flex justify-content-end">
                <Button
                  onClick={() => {
                    const email =
                      show.email.match("[a-z0-9]+@[a-z]+.[a-z]{2,3}")?.[0] ||
                      null;
                    if (email !== null) {
                      setShow({ ...show, box: false });
                      dispatch(addPreference(show.email));
                    } else
                      setShow({
                        ...show,
                        type: "danger",
                        message: "Invalid E-mail",
                      });
                  }}
                  variant={`outline-${show.type}`}
                >
                  Get in!
                </Button>
              </div>
            </Card.Body>
            <Card.Footer>
              <script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9242419013231930"
                crossOrigin="anonymous"
              ></script>
              <script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9242419013231930"
                crossOrigin="anonymous"
              ></script>
              {/* <!-- 1st website-2 --> */}
              <ins
                className="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client="ca-pub-9242419013231930"
                data-ad-slot="5517777372"
                data-ad-format="auto"
                data-full-width-responsive="true"
              ></ins>
              <script>
                (adsbygoogle = window.adsbygoogle || []).push({});
              </script>
              <script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9242419013231930"
                crossOrigin="anonymous"
              ></script>
              <ins
                className="adsbygoogle"
                style={{ display: "block" }}
                data-ad-format="fluid"
                data-ad-layout-key="-6t+ed+2i-1n-4w"
                data-ad-client="ca-pub-9242419013231930"
                data-ad-slot="5210693602"
              ></ins>
              <script>
                (adsbygoogle = window.adsbygoogle || []).push({});
              </script>
            </Card.Footer>
          </Card>
        </Card.Body>
      </Card>
    </>
  );
}
