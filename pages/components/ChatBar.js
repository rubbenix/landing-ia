import { TextInput, Button, Group } from '@mantine/core';
import { IconSend } from '@tabler/icons-react';

function ChatBar() {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-4xl p-4 z-50">
      <Group
        position="apart"
        className="bg-white rounded-full p-3 shadow-lg border border-gray-200"
      >
        {/* Campo de entrada */}
        <TextInput
          placeholder="¿A dónde quieres enviar?"
          radius="xl"
          size="md"
          className="flex-grow"
          styles={{
            input: { width: '100%', border: 'none', outline: 'none', padding: '0' },
          }}
        />

        {/* Botón de enviar con el icono alineado a la derecha */}
        <Button
          radius="xl"
          size="md"
          color="blue"
          rightIcon={<IconSend size={20} />}
          styles={{
            root: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            },
          }}
        />
      </Group>
    </div>
  );
}

export default ChatBar;
