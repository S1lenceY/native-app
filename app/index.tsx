import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-200">
      <Text className="p-5 bg-green-300 text-green-700 rounded text-2xl font-bold">
        Welcome World!
      </Text>
      <Link href="/firstRoute">Presionar para ir al otro lado XD</Link>
      <Link href="/detail/detalles">Detalle de poliza</Link>
      <Link href="/no_detail/[id]">No Detalle de Poliza</Link>
      <Link href="/(app)/detail_evaluate/detalleEvaluado">Hola</Link>
    </View>
  );
}
