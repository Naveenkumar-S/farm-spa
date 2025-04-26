'use client'
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json())

function ListFarms({ userId }) {
  const { data, error, isLoading } = useSWR(`http://127.0.0.1:4444/v1/farms/fetch?farm_id=${userId}`, fetcher)
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  return (
    <div className="table-responsive mt-5">
      <table className="table table-sm table-dark table-striped align-middle">
        <thead>
          <tr>
            <th scope="col">Farms</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((row, idx) => {
              return (
                <tr key={idx}>
                  <th scope="row">{row.name}</th>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default function Home() {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5 py-4">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Farm Management</a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Farms</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main content */}
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-6">
            <ListFarms userId={"PAH05HXR3N"} />
          </div>
        </div>
      </div>
    </div>
  );
}
