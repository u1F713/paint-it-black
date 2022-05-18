import { FC, ReactElement } from 'react'
import * as styles from './greeter.styled'

const Greeter: FC<{}> = (): ReactElement => {
  return (
    <styles.Wrapper>
      <styles.Font>The Show Must Go On</styles.Font>
    </styles.Wrapper>
  )
}
export default Greeter
