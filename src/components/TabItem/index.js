import './index.css'

const TabItem = props => {
  const {tabDetails, onChangeTab, isActive} = props
  const {tabId, displayText} = tabDetails

  const activeClassName = isActive ? 'active-tab-btn' : 'tab-btn'

  const onTabClick = () => {
    onChangeTab(tabId)
  }
  return (
    <li className="tab-item">
      <button className={activeClassName} type="button" onClick={onTabClick}>
        <p className="tab">{displayText}</p>
      </button>
    </li>
  )
}

export default TabItem
