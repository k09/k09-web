
export default function Navigation() {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">&lt;k09/&gt;</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a>One</a></li>
                    <li>
                        <details>
                            <summary>Menu</summary>
                            <ul className="bg-base-100 rounded-t-none p-2">
                                <li><a>Two</a></li>
                                <li><a>Three</a></li>
                                <li><a>Four</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    );
  }
  