import {
  HStack,
  useColorModeValue,
  Image,
  Center,
  Icon,
  Kbd,
  IconButton,
} from "@hope-ui/solid"
import { Show, Switch, Match } from "solid-js"
import { getMainColor, getSetting, layout, objStore, State } from "~/store"
import { BsSearch } from "solid-icons/bs"
import { CenterLoading } from "~/components"
import { Container } from "../Container"
import { bus } from "~/utils"
import { Layout } from "./layout"
import { AiOutlineFileSearch } from "solid-icons/ai"
import { TbListSearch } from "solid-icons/tb"
import { CgImage } from "solid-icons/cg"

export const Header = () => {
  const logos = getSetting("logo").split("\n")
  const logo = useColorModeValue(logos[0], logos.pop())
  return (
    <Center
      class="header"
      w="$full"
      // shadow="$md"
    >
      <Container>
        <HStack
          px="calc(2% + 0.5rem)"
          py="$2"
          w="$full"
          justifyContent="space-between"
        >
          <HStack class="header-left" h="44px">
            <Image
              src={logo()!}
              h="$full"
              w="auto"
              fallback={<CenterLoading />}
            />
          </HStack>
          <HStack class="header-right" spacing="$2">
            <Show when={objStore.state === State.Folder}>
              {/* <HStack
                aria-label="Search"
                // 背景色
                bg="$neutral4"
                // 长度
                // w="$32"
                // 方框
                p="$2"
                // 圆角
                rounded="$md"
                color={getMainColor()}
                justifyContent="space-between"
                border="2px solid transparent"
                cursor="pointer"
                _hover={{
                  borderColor: "$info6",
                }}
                onClick={() => {
                  bus.emit("tool", "search")
                }}
              >
                <Icon as={AiOutlineFileSearch} />
                <HStack>
                  <Kbd>Ctrl</Kbd>
                  <Kbd>K</Kbd>
                </HStack>
              </HStack> */}
              <IconButton
                aria-label="Search"
                compact
                size="lg"
                // 自带的搜索原本只能显示两个图标下面的换成了三个
                // icon={
                //   <Show when={layout() === "list"} fallback={<TbListSearch />}>
                //     <AiOutlineFileSearch /> 
                //   </Show>
                // }
                
                //这次支持三个不同的图标了
                icon={
                  <Switch>
                    <Match when={layout() === "list"}>
                      <TbListSearch />
                    </Match>
                    <Match when={layout() === "grid"}>
                      <AiOutlineFileSearch />
                    </Match>
                    <Match when={layout() === "image"}>
                      <CgImage />
                    </Match>
                  </Switch>
                }
                onClick={() => {
                  bus.emit("tool", "search")
                }}
              />
              {/* 搜索右侧的那个变换的按钮 */}
              <Layout />
            </Show>
          </HStack>
        </HStack>
      </Container>
    </Center>
  )
}