import { FC, ReactElement } from 'react'
import { Wrapper, Font } from '@components/Greeter/styled'

const Greeter: FC<{}> = (): ReactElement => {
  return (
    <Wrapper>
      <Font>The Show Must Go On</Font>
    </Wrapper>
  )
}
export default Greeter
