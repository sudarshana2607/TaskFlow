import { NavLink } from 'react-router-dom';

function SideNav() {
  const user = {
    firstName: 'John',
    lastName: 'Doe',
    role: 'Developer'
  }

  const modules = [
    { name: 'Dashboard', icon: '📊', path: '/' },
    { name: 'Projects', icon: '📁', path: '/projects' },
    { name: 'Team Member', icon: '👥', path: '/team' }
  ]

  return (
    <div className="w-64 bg-gray-800 text-white flex flex-col min-h-screen">
      {/* Title */}
      <div className="p-6 border-b border-gray-700">
        <h1 className="text-2xl font-bold text-blue-400">TaskFlow</h1>
      </div>

      {/* Modules */}
      <div className="flex-1 p-6">
        <nav className="space-y-2">
          {modules.map((module, index) => (
            <NavLink
              key={index}
              to={module.path}
              className={({ isActive }) =>
                `flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                  isActive ? 'bg-blue-600 text-white' : 'hover:bg-gray-700 text-gray-200'
                }`
              }
            >
              <span className="text-lg">{module.icon}</span>
              <span className="font-medium">{module.name}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      {/* User Section */}
      <div className="p-6 border-t border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
            {user.firstName.charAt(0)}
          </div>
          <div>
            <p className="font-medium">{user.firstName}</p>
            <p className="text-sm text-gray-400">{user.role}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideNav