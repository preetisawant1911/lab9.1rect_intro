import React from 'react';
import { UserProfileCardProps } from '../../types';



export const UserProfileCard: React.FC<UserProfileCardProps> = ({
  user,
  showEmail = false,
  showRole = false,
  onEdit,
  children
}) => {
  return (
    <div className="p-4 border rounded bg-white shadow">
      <div className="flex items-center">
        {user.avatarUrl && (
          <img
            src={user.avatarUrl}
            alt={user.name}
            className="w-16 h-16 rounded-full mr-4"
          />
        )}
        <div>
          <h2 className="text-lg font-bold">{user.name}</h2>
          {showEmail && (
            <p className="text-sm text-gray-600">{user.email}</p>
          )}
          {showRole && (
            <p className="text-sm text-gray-600">{user.role}</p>
          )}
        </div>
      </div>

      {children}

      {onEdit && (
        <button
          onClick={() => onEdit(user.id)}
          className="mt-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Edit Profile
        </button>
      )}
    </div>
  );
};
