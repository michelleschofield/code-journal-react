import { Link, Outlet } from 'react-router-dom';

export function Header() {
  return (
    <>
      <header className="header purple-background">
        <div className="container">
          <div className="row">
            <div className="column-full d-flex align-center">
              <h1 className="white-text">Code Journal</h1>
              <h3>
                <Link
                  to={'/'}
                  id="entriesLink"
                  className="entries-link white-text">
                  Entries
                </Link>
              </h3>
            </div>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
}
