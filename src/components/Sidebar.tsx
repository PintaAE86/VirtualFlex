

function Sidebar (){
    return (
    <>
    <div className="sideContainer">
        <div className="sideContainer__1">
            <h1>Short Term</h1>
            <ul>
                <li>In Queue</li>
                <li>Completed</li>
                <li>Deleted/Archives</li>
            </ul>
        </div>
        <div className="sideContainer__2">
        <h1>Long Term</h1>
            <ul>
                <li>In Queue</li>
                <li>Completed</li>
                <li>Deleted/Archives</li>
            </ul>
        </div>
        <div className="sideContainer__3">Sign in/Out</div>
    </div>
    </>
    )
}

export default Sidebar;