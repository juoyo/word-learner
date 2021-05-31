import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import InfoPanel from 'components/InfoPanel'
import alipay from 'assets/alipay.png'
import vscLogo from 'assets/vsc-logo.svg'

const Footer: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [content, setShowContent] = useState('donate')

  const icon = content === 'donate' ? 'coffee' : 'terminal'
  const color = content === 'donate' ? 'bg-yellow-100' : 'bg-blue-300'
  const btnColor = content === 'donate' ? 'bg-yellow-300' : 'bg-blue-400'
  const iconColor = content === 'donate' ? 'text-yellow-500' : 'text-blue-600'

  return (
    <>
      {showModal && (
        <InfoPanel
          state={showModal}
          icon={icon}
          color={color}
          btnColor={btnColor}
          iconColor={iconColor}
          buttonOnclick={() => setShowModal(false)}
        >
          {content === 'donate' ? (
            <>
              <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white dark:text-opacity-70" id="modal-headline">
                Buy me a coffee
              </h3>
              <div className="mt-2 ">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  非常感谢大家使用 Word Learner,
                  希望在未来购买服务器方便访问与云同步存储数据。
                </p>
                <br />
                <p className="text-sm text-gray-700 dark:text-gray-200">如果您喜欢，非常感谢您的支持!</p>
                <br />
                <img className="w-2/6 ml-1 " src={alipay} alt="alipay" />
              </div>
            </>
          ) : (
            <>
              <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white dark:text-opacity-70" id="modal-headline">
                VSCode 摸🐟插件
              </h3>
              <div className="mt-2 ">
                
                <a className="underline mr-5 dark:text-gray-300" href="https://github.com/juoyo/word-leraner">
                  GitHub 项目
                </a>
                <br />
              </div>
            </>
          )}
        </InfoPanel>
      )}
      <div className="w-full text-sm text-center mt-4 pb-1 ease-in" onClick={(e) => e.currentTarget.blur()}>
        <a href="https://github.com/juoyo/word-leraner" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={['fab', 'github']} className="text-gray-500 dark:text-gray-400 mr-3" />
        </a>

        <span
          className="cursor-pointer"
          onClick={(e) => {
            setShowContent('donate')
            setShowModal(true)
            e.currentTarget.blur()
          }}
        >
          <FontAwesomeIcon icon={['fas', 'coffee']} className="text-gray-500 dark:text-gray-400 mr-3" />
        </span>

        <span
          className="mr-3 cursor-pointer"
          onClick={(e) => {
            setShowContent('vscode')
            setShowModal(true)
            e.currentTarget.blur()
          }}
        >
          <img src={vscLogo} className="svg-inline--fa fill-current text-gray-500" alt="visual studio code" />
        </span>

        <a href="mailto:juoyohub@gmail.com" target="_blank" rel="noreferrer" onClick={(e) => e.currentTarget.blur()}>
          <FontAwesomeIcon icon={['fas', 'envelope']} className="text-gray-500 dark:text-gray-400 mr-3" />
        </a>

        <div className="group relative inline-block ">
          <a href="https://gitee.com/" className="text-gray-500 dark:text-gray-400 mr-3" title="中国大陆镜像">
            🇨🇳
          </a>
          <div className="invisible group-hover:visible absolute bottom-full left-1/2 w-40 -ml-20 pt-2 flex items-center justify-center">
            <span className="py-1 px-3 text-gray-500 dark:text-gray-400 text-xs">中国大陆镜像</span>
          </div>
        </div>
        <span
          className="text-gray-500 dark:text-gray-400 cursor-pointer no-underline hover:no-underline "
          onClick={(e) => {
            setShowContent('donate')
            setShowModal(true)
            e.currentTarget.blur()
          }}
        >
          @ Qwerty Learner
        </span>
      </div>
    </>
  )
}

export default Footer
