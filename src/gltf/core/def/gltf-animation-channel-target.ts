import IValidate from "../../../typings/IValidate"
import { GLTFExtensionBase } from "../../ext"
import GLTFAnimationChannelTargetPath from "./enum/gltf-animation-channel-target-path"

class GLTFAnimationChannelTarget implements IValidate {
  node?: number
  path: GLTFAnimationChannelTargetPath
  extensions: Set<GLTFExtensionBase> = new Set

  validate = () => true
}

export default GLTFAnimationChannelTarget