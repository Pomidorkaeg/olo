import React, { useState, useEffect } from 'react';

interface TeamMember {
  id: string;
  name: string;
  role: 'player' | 'coach' | 'staff';
  position?: string;
  number?: number;
  photo?: string;
  description: string;
}

const TeamManager: React.FC = () => {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCreating, setIsCreating] = useState(false);
  const [editingMember, setEditingMember] = useState<TeamMember | null>(null);
  const [newMember, setNewMember] = useState<Partial<TeamMember>>({
    role: 'player'
  });

  // Загрузка существующих данных о команде
  useEffect(() => {
    const loadTeamMembers = async () => {
      try {
        // Здесь должен быть запрос к API для получения списка членов команды
        // const response = await fetch('/api/team');
        // const data = await response.json();
        
        // Временная заглушка для демонстрации
        const mockMembers: TeamMember[] = [
          {
            id: '1',
            name: 'Иван Петров',
            role: 'player',
            position: 'Нападающий',
            number: 10,
            photo: 'https://example.com/player1.jpg',
            description: 'Капитан команды, опытный нападающий'
          },
          {
            id: '2',
            name: 'Алексей Сидоров',
            role: 'coach',
            photo: 'https://example.com/coach1.jpg',
            description: 'Главный тренер команды'
          },
          {
            id: '3',
            name: 'Мария Иванова',
            role: 'staff',
            photo: 'https://example.com/staff1.jpg',
            description: 'Врач команды'
          }
        ];
        
        setMembers(mockMembers);
      } catch (error) {
        console.error('Ошибка загрузки данных о команде:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadTeamMembers();
  }, []);

  const handleCreateMember = async () => {
    try {
      // Здесь должен быть запрос к API для создания члена команды
      // const response = await fetch('/api/team', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(newMember)
      // });
      // const data = await response.json();
      
      // Временная заглушка для демонстрации
      const mockMember: TeamMember = {
        id: Date.now().toString(),
        name: newMember.name || '',
        role: newMember.role || 'player',
        position: newMember.position,
        number: newMember.number,
        photo: newMember.photo,
        description: newMember.description || ''
      };
      
      setMembers([...members, mockMember]);
      setIsCreating(false);
      setNewMember({ role: 'player' });
    } catch (error) {
      console.error('Ошибка создания члена команды:', error);
    }
  };

  const handleUpdateMember = async (member: TeamMember) => {
    try {
      // Здесь должен быть запрос к API для обновления члена команды
      // await fetch(`/api/team/${member.id}`, {
      //   method: 'PUT',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(member)
      // });
      
      setMembers(members.map(m => 
        m.id === member.id ? member : m
      ));
      setEditingMember(null);
    } catch (error) {
      console.error('Ошибка обновления члена команды:', error);
    }
  };

  const handleDeleteMember = async (id: string) => {
    try {
      // Здесь должен быть запрос к API для удаления члена команды
      // await fetch(`/api/team/${id}`, { method: 'DELETE' });
      
      setMembers(members.filter(m => m.id !== id));
    } catch (error) {
      console.error('Ошибка удаления члена команды:', error);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Управление командой</h2>
        <button
          onClick={() => setIsCreating(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Добавить члена команды
        </button>
      </div>

      {(isCreating || editingMember) && (
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">
            {editingMember ? 'Редактирование члена команды' : 'Добавление нового члена команды'}
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Имя</label>
              <input
                type="text"
                value={editingMember?.name || newMember.name || ''}
                onChange={(e) => {
                  if (editingMember) {
                    setEditingMember({ ...editingMember, name: e.target.value });
                  } else {
                    setNewMember({ ...newMember, name: e.target.value });
                  }
                }}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Роль</label>
              <select
                value={editingMember?.role || newMember.role || 'player'}
                onChange={(e) => {
                  if (editingMember) {
                    setEditingMember({ ...editingMember, role: e.target.value as TeamMember['role'] });
                  } else {
                    setNewMember({ ...newMember, role: e.target.value as TeamMember['role'] });
                  }
                }}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="player">Игрок</option>
                <option value="coach">Тренер</option>
                <option value="staff">Персонал</option>
              </select>
            </div>
            {(editingMember?.role === 'player' || newMember.role === 'player') && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Позиция</label>
                  <input
                    type="text"
                    value={editingMember?.position || newMember.position || ''}
                    onChange={(e) => {
                      if (editingMember) {
                        setEditingMember({ ...editingMember, position: e.target.value });
                      } else {
                        setNewMember({ ...newMember, position: e.target.value });
                      }
                    }}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Номер</label>
                  <input
                    type="number"
                    value={editingMember?.number || newMember.number || ''}
                    onChange={(e) => {
                      if (editingMember) {
                        setEditingMember({ ...editingMember, number: parseInt(e.target.value) });
                      } else {
                        setNewMember({ ...newMember, number: parseInt(e.target.value) });
                      }
                    }}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </>
            )}
            <div>
              <label className="block text-sm font-medium text-gray-700">Фото URL</label>
              <input
                type="text"
                value={editingMember?.photo || newMember.photo || ''}
                onChange={(e) => {
                  if (editingMember) {
                    setEditingMember({ ...editingMember, photo: e.target.value });
                  } else {
                    setNewMember({ ...newMember, photo: e.target.value });
                  }
                }}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Описание</label>
              <textarea
                value={editingMember?.description || newMember.description || ''}
                onChange={(e) => {
                  if (editingMember) {
                    setEditingMember({ ...editingMember, description: e.target.value });
                  } else {
                    setNewMember({ ...newMember, description: e.target.value });
                  }
                }}
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => {
                  setIsCreating(false);
                  setEditingMember(null);
                }}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Отмена
              </button>
              <button
                onClick={() => {
                  if (editingMember) {
                    handleUpdateMember(editingMember);
                  } else {
                    handleCreateMember();
                  }
                }}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                {editingMember ? 'Сохранить' : 'Создать'}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member) => (
          <div key={member.id} className="bg-white rounded-lg shadow overflow-hidden">
            {member.photo && (
              <img
                src={member.photo}
                alt={member.name}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm text-gray-500">
                    {member.role === 'player' ? 'Игрок' :
                     member.role === 'coach' ? 'Тренер' : 'Персонал'}
                  </p>
                  {member.role === 'player' && (
                    <>
                      <p className="text-sm text-gray-500">{member.position}</p>
                      <p className="text-sm text-gray-500">№{member.number}</p>
                    </>
                  )}
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setEditingMember(member)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    Редактировать
                  </button>
                  <button
                    onClick={() => handleDeleteMember(member.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Удалить
                  </button>
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-600">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamManager; 