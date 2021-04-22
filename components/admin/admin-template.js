import styled from '@emotion/styled'
import Title from '@/components/common/title'

const AdminTemplate = ({
  title,
  data,
  currentVisible,
  setCurrentVisible,
  topBar,
  children,
}) => {
  return (
    <AdminTemplateWrapper className="wrapper">
      <Title title={`${title}${data.length ? ` (${data.length})` : ''}`} />
      <div className="content">
        <ul className="list">
          {data.length ? (
            data.map((item) => (
              <li
                key={item._id}
                className={currentVisible._id === item._id ? 'active' : ''}
                onClick={() => setCurrentVisible(item)}
              >
                <div className="topbar">
                  <p>{topBar || item._id}</p>
                </div>
                {currentVisible._id === item._id && children}
              </li>
            ))
          ) : (
            <li
              key={data._id}
              className={currentVisible._id === data._id ? 'active' : ''}
              onClick={() => setCurrentVisible(data)}
            >
              <div className="topbar">
                <p>{topBar || data._id}</p>
              </div>
              {currentVisible._id === data._id && children}
            </li>
          )}
        </ul>
      </div>
    </AdminTemplateWrapper>
  )
}

const AdminTemplateWrapper = styled.div`
  margin-top: 6rem;

  .content {
    margin-top: 4rem;

    h3 {
      margin-bottom: 1rem;
    }

    button {
      margin-top: 2rem;
    }
  }

  .list {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .topbar {
      font-family: var(--font-secondary);
      display: flex;
      gap: 2rem;
    }

    form {
      margin-top: 4rem;
    }

    .actions {
      display: flex;
      gap: 1rem;
    }

    li {
      background: var(--color-secondary-2);
      border: 0.1rem solid var(--color-gray-2);
      padding: 2rem 4rem;
      cursor: pointer;
      transition: all var(--transition);

      &.active {
        cursor: auto;
        border: 0.1rem solid var(--color-primary);
      }

      &:hover {
        border: 0.1rem solid var(--color-primary);
      }
    }
  }
`

export default AdminTemplate
