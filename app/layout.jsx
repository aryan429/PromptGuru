import "@styles/global.css"
import Nav from "@components/Nav"
import Provider from "@components/Provider"
export const metadata = {
    title: "PromptGuru",
    description: "Discover the best prompts from around the internet.",
};
function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Provider>
                <div className="main">
                    <div className="gradient" />
                </div>
                <main className="app">
                <Nav />
                    {children}
                </main>
                </Provider>
            </body>
        </html >
    )
};

export default RootLayout;